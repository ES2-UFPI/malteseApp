import React, { useState, useEffect, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '~/context/AuthProvider';
import api from '~/services/api';

import { ProductCard } from '~/components/theme';

import { Container, ProductsList, Title } from './styles';



const Products = () => {
  const [storeProducts, setStoreProducts] = useState(null);
  const { user } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const storeId = user._id;
      console.debug("RETRIEVING STORE CONTENTS");
      // const response = await api.get(`/providers/${storeId}/showProducts`);
      console.log(`Request: /providers/${storeId}/showProducts`);
      const response = api.get(`/providers/${storeId}/showProducts`)
      .then(
        (content) => {
          const cdata = content.data;
          console.log("Response content: " + JSON.stringify(cdata));

          if (content) {
            const parsedData = cdata.map(data => {
              const { product } = data;
              if (data.status === 'active') {
                return {
                  ...product,
                  _id: product._id,
                  storeId,
                  stock: data.quantity,
                  image: product.image_url,
                  title: product.name,
                  price: product.price,
                };
              }
            });
            setStoreProducts(parsedData);
          }
          else {
            console.debug("FAILED TO RETRIEVe");
            console.error("Faield to retrieve data with store products")
          }
        }
      )
      .catch(
        (reason) => {
          console.log("Failed: " + reason);
        }
      );
      console.log("Response: " + response);
      
    }
    if (!storeProducts) {
      console.debug("NO STORE PRODUCTS, LOADING");
      loadData();
    }
  }, []);

  const handleNavigation = product => {
    console.debug("NAVIGATING TO PRODUCT");
    navigation.navigate('ManageProduct', { product });
  };

  const renderItem = ({ item }) => {
    
    console.debug("Item: " + JSON.stringify(item));
    return(
      <Container>
        <ProductCard
          imageSource={item.image}
          title={item.title}
          price={item.price}
          buttonText="Editar"
          handlePress={() => handleNavigation(item)}
        />
      </Container>
    );
  }

  return (
    <Container>
      <ProductsList
        keyExtractor={item => item.id}
        data={storeProducts}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Products;
