import React from 'react';
import {Form, Button, ButtonToolbar, ButtonGroup, Row} from 'react-bootstrap'

function searchingFor(term) {
    return function (x) {
        return x.id.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

const url =  'http://13.251.156.195:8080/products'

export default class ProductManagement extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           products: [],
           id: '',
           name: '',
           price:'',
           description: '',
           brand: '',
           producer: '',
           imageURL: '',
           productTypeId: '',
           term: '',
           addNew: true,
           currentDisplay: props.products
        }
       this.searchHandler = this.searchHandler.bind(this);
    }
    
   searchHandler(event){
    this.setState({term: event.target.value})
    }

    componentWillReceiveProps(props) {
        this.setState({ currentDisplay: props.products });
    }

    handleFilterByPrice(filter) {
        if (filter === 'lowtohigh') {
            let lowToHigh = this.state.products.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
            this.setState({ currentDisplay: lowToHigh });
        }
        else if (filter === 'hightolow') {
            let highToLow = this.state.products.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            });
            this.setState({ currentDisplay: highToLow });
        }
    }
    

    fetchData() {
        fetch(url)
        .then(response => response.json())
        .then( response => response.filter(
            product =>
                product.id &&
                product.name &&
                product.price &&
                product.description &&
                product.brand &&
                product.producer &&
                product.productTypeId&&
                product.imageURL
            )
        )
        .then(response => this.setState({ products: response, foundProducts: response }))  
    }

   componentDidMount() {
       this.fetchData()
   }
 
   handleChange(e) {
       var obj = {}
       obj[e.target.name] = e.target.value
       this.setState(obj)
   }
 
   save() {
       if(this.state.addNew === true){
          if(!this.state.id.match(/^\S+$/g)){
            alert("ID must be a alphanumeric without space")
           } 
          else if(!this.state.imageURL.match(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/)){
            alert('Image URL must be a valid URL')
           }
          else{
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: this.state.id, 
                 name: this.state.name,
                 price: Math.abs(this.state.price),
                 description: this.state.description,
                 brand: this.state.brand,
                 producer: this.state.producer,
                 productTypeId: this.state.productTypeId,
                 imageURL: this.state.imageURL
              })
            })
            .then(res => res.json())
                .then(json => this.fetchData())
                .then(() => alert('Added!'))
            }
           
       }
       else{
        if(!this.state.id.match(/^\S+$/g)){
            alert("ID must be a alphanumeric without space")
           } 
          else if(!this.state.imageURL.match(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/)){
            alert('Image URL must be a valid URL')
           }
          else{
            fetch(url, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: this.state.id, 
                 name: this.state.name,
                 price: Math.abs(this.state.price),
                 description: this.state.description,
                 brand: this.state.brand,
                 producer: this.state.producer,
                 productTypeId: this.state.productTypeId,
                 imageURL: this.state.imageURL
              })
            })
            .then(res => res.json())
                .then(json => this.fetchData())
                .then(() => alert('Updated!'))
          } 
       }
   }
 
   delete(id){
       var url1 = ('http://13.251.156.195:8080/products/id')
       if(confirm('Do you want to delete product with id ' + id +'?')){
           fetch(url + "/"+id, {
               method: 'delete',
           }).then(res=>res.json())
           .then(json=>this.fetchData())
       } 
    
    }
 
   add(id, name, price, description, brand, producer, imageURL, productTypeId){
       this.setState({id: '', 
       name: '',
       price: '',
       description: '',
       brand: '',
       producer: '',
       imageURL: '', 
       productTypeId: '',
       addNew: true})
    }
 
   edit(id, name, price, description, brand, producer, imageURL, productTypeId){
    this.setState({id: id, 
    name: name,
    price: price,
    description: description,
    brand: brand,
    producer: producer,
    imageURL: imageURL, 
    productTypeId: productTypeId,
    addNew: false})
    }}
    