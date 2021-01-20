import React, { useState, useEffect, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '~/context/AuthProvider';
import api from '~/services/api';

import { ProductCard } from '~/components/theme';

import { Container, ProductsList, Title } from './styles';



const Products = () => {
  const navigation = useNavigation();
  const [storeProducts, setStoreProducts] = useState(null);
  const [storeNeedsUpdate, setStoreNeedsUpdate] = useState(true);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    async function loadProviderStoreContent() {
      const storeId = user._id;
      const productsRequestPromise = await api.get(`/providers/${storeId}/showProducts`)
        .then((response) => {
          const storeContentData = response.data;
          console.log("Store Content:\n" + JSON.stringify(storeContentData));
          
          // Put each item on the list
          const parsedData = storeContentData.map(data => {
            const { product, quantity } = data;
            if (data.status === 'active') {
              return {
                ...product,
                _id: product._id,
                storeId,
                stock: data.quantity,
                image: product.image_url,
                title: product.name,
                price: product.price,
                quantity: quantity
              };
            }
          });
          setStoreProducts(parsedData);
          setStoreNeedsUpdate(false);
        })
        .catch((reason) => {
          console.log("Failed to retrieve store content:\n" + reason);
        });
      console.log("Response:\n" + productsRequestPromise);

    }
    if (!storeProducts || storeNeedsUpdate == true) {
      console.debug("Loading provider store content");
      loadProviderStoreContent();
    }
  }, []);

  const handleChange = (value) => {
    setStoreNeedsUpdate(value);
  }

  const handleNavigation = (productItem) => {
    console.debug("Managing product:\n" + JSON.stringify(productItem))
    navigation.navigate('ManageProduct', { product: productItem, afterChange: handleChange });
  };

  const renderItem = ({ item }) => {
    return (
      <ProductCard
        imageSource={item.image}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        buttonText="Editar"
        handlePress={() => handleNavigation(item)}
      />
    );
  }

  return (
    <Container>
      <ProductsList
        initialNumToRender={50}
        extraData={storeNeedsUpdate}
        keyExtractor={item => item.id}
        data={storeProducts}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Products;
