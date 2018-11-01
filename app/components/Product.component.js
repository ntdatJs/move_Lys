import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

import themes from '../styles/theme.style';

class Product extends Component {
    addToCart = () => {
        this.props.addItemsToCart(this.props.item)
    }
    render() {
        const { product } = this.props;
            return (
        <View style={styles.container}>
            <Image source={product.picture} style={styles.imageProduct}/>
            <View style={styles.productDes}>
                <Text>{product.title}</Text>
                <Text>${(product.cost).toFixed(3)}</Text>
                <Text>{product.author}</Text>
                <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Them gio hang</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        alignItems: 'center',
        margin: 10,
        width: '100%',
        flexDirection: 'row'
        
    },
    imageProduct: {
        justifyContent: 'flex-start',
        marginRight: 10,
        width : "40%",
        height : 150,
    },
    productDes: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        width : "50%",
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: themes.BUTTON_COLOR,
        alignItems: 'flex-end',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});

export default Product;
