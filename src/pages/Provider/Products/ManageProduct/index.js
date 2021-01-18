import React, { useState, useContext, useEffect, useRef } from 'react';
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
  const formRef = useRef();

  const handleAddProduct = async () => {
    // const response = await api.post('/RotaAqui', {
    //   id: user.id,
    //   name,
    //   price,
    //   description,
    // });
    // if (response.status === 201) {
    //   alert('Deu certo');
    // }
  };

  const handleEditProduct = async () => {};

  const handleDeleteProduct = async () => {
    if (product.id) {
      console.log('deletar produto aqui');
    } else {
      // Atalho para limpar dados do formulario
      formRef.current.resetForm();
    }
  };

  const handleFormSubmit = async values => {
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

  return (
    <Container>
      <HeaderContainer>
        <Title>Cadastro de Produto</Title>
        <DeleteButton onPress={handleDeleteProduct}>
          <Icon name="trash" size={20} color="#ff0000" />
        </DeleteButton>
      </HeaderContainer>
      <Formik
        ref={formRef}
        initialValues={{
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
              text="Cadastrar"
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
