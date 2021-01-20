import React, { useState, useEffect, useContext } from 'react';
import { Icon } from '~/components/global';
import { ProductCard } from '~/components/theme';
import { FridgeContext } from '~/context/FridgeProvider';

import api from '~/services/api';

import {
  Container,
  SearchBarContainer,
  SearchBarInput,
  ItemListContainer,
  EmptyText,
} from './styles';

const SearchProduct = ({ route }) => {
  const [products, setProducts] = useState(null);
  const [emptyList, setEmptyList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [typingTimer, setTypingTimer] = useState(null);
  const { handleAddProductInFridge } = useContext(FridgeContext);
  const { storeId } = route.params;
  const loadProducts = async () => {
    setLoading(true);
    const response = await api.get(`/clients/${storeId}/search/${searchValue}`);
    const parsedData = response.data.map(data => {
      return {
        ...data,
        _id: data._id,
        storeId,
        stock: 10,
        image: data.image_url,
        title: data.name,
        price: data.price,
      };
    });
    if (parsedData.length > 0) {
      setProducts(parsedData);
      setEmptyList(false);
    } else {
      setEmptyList(true);
    }
  };

  const changeSearchValue = searchText => {
    if (searchText) {
      setLoading(true);
      setProducts(null);
    } else {
      setLoading(false);
    }
    if (typingTimer) clearTimeout(typingTimer);
    setTypingTimer(
      setTimeout(() => {
        if (searchText) {
          setSearchValue(searchText);
        }
      }, 500),
    );
  };

  useEffect(() => {
    if (searchValue.trim() !== '') {
      loadProducts();
    }
  }, [searchValue]);

  return (
    <Container>
      <SearchBarContainer>
        <Icon name="search" value={20} color="#000" />
        <SearchBarInput
          placeholder="Busque por uma bebida"
          onChangeText={value => {
            changeSearchValue(value.toLowerCase().trim());
          }}
        />
      </SearchBarContainer>
      {!emptyList ? (
        <ItemListContainer
          numColumns={2}
          columnWrapperStyle={{ flexWrap: 'wrap' }}
          keyExtractor={item => item._id}
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              key={item._id}
              title={item.title}
              imageSource={item.image}
              price={item.price}
              handlePress={() => handleAddProductInFridge(item)}
            />
          )}
        />
      ) : (
        <EmptyText>Nenhum produto foi encontrado</EmptyText>
      )}
    </Container>
  );
};

export default SearchProduct;
