import api from '~/services/api';

const read_name_field = function() {
    return "Example Product Name"
}

const read_price_field = function() {
    return 100.00
}

const read_description_field = function() {
    return "This is a stub product description."
}

const read_image_field = function() {
    return ""
}

/**
 * @description Register a product via Frontend
 * 
 * @param name          Product Name (string)
 * @param price         Product Price (float)
 * @param description   Product Description (string)
 * @param image         Product Image (how to imageref?)
 */
const register_product = function (name, price, description, image) {
    const product_json = {
        name: name,
        price: price,
        description: description,
        image: image
    }
    const product_creation_response = await api.post(`/providers`, product_json);
    
    if (product_creation_response) {
        return true;
    }

    return false;
}