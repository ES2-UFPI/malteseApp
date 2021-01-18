import React, { useState, useContext, useEffect } from 'react';
import { Formik } from 'formik';
import { AuthContext } from '~/context/AuthProvider';

import api from '~/services/api';

import { Button } from '~/components/theme';
import {
  Container,
  HeaderContainer,
  Title,
  DeleteButton,
  Input,
} from './styles';
import { Icon } from '~/components/global';

const Home = ({ route }) => {
  const [product, setProduct] = useState(null);
  const [pageType, setPageType] = useState('edit');

  const { user } = useContext(AuthContext);

  const handleAddProduct = async () => {
    const data = JSON.stringify(product);
    console.log("Add: " + data);
  };

  const handleEditProduct = async () => {
    const data = JSON.stringify(product);
    console.log("Edit: " + data);
  };

  const handleDeleteProduct = async () => {
    if (product?.id) {
      console.log('deletar produto aqui: ' + product?.id);
    }
  };

  const handleFormSubmit = async values => {
    console.log("Submitting values: " + JSON.stringify(values))
    if (product) {
      console.log("Actual ID: " + (product?.id) ? product?.id : "NONE");
    }

    if (!values.name || !values.description || !values.price) {
      console.error("missing values");
      return;
    }

    if (pageType === 'add') {
      handleAddProduct(values);
    } else {
      handleEditProduct(values);
    }
  };

  useEffect(() => {
    if (route.params?.product) {
      setProduct(route.params.product);
      setPageType('edit');
    } else {
      setPageType('add');
    }
  }, []);

  const renderName = () => {
    return ((product?.name) ? product?.name : "Cadastro de Produto");
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>{renderName()}</Title>
        {
          (product) ? (
            <DeleteButton onPress={handleDeleteProduct}>
              <Icon name="trash" size={20} color="#ff0000" />
            </DeleteButton>
          ) : (
            <DeleteButton>
              <Icon name="trash" size={20} color="#ccc" />
            </DeleteButton>
          )
        }
      </HeaderContainer>
      <Formik
        initialValues={{
          id: product?._id,
          name: product?.name,
          description: product?.description,
          price: product?.price,
        }}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Input
              onChangeText={handleChange('name')}
              placeholder="Nome"
              value={values.name}
            />
            <Input
              onChangeText={handleChange('description')}
              placeholder="Descrição"
              multiline
              value={values.description}
            />
            <Input
              keyboardType="numeric"
              onChangeText={handleChange('price')}
              placeholder="Preço"
              value={values.price}
            />
            <Button
              text= {(product) ? "Editar" : "Cadastrar"}
              primaryFont
              primaryButton
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
