import {LightningElement,track,wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductClass.getProducts';
export default class ProductLWC extends LightningElement {
    @track data;
    @track columns=[{label:'Name',fieldName:'Name',type:'text'},
                   {label:'Prize',fieldName:'Prize__c',type:'Number'},
                 {label:'Discount',fieldName:'Discount__c',type:'Number'},
                 {label:'Quantity',fieldName:'Quabtity_of_Products__c',type:'Number'}];
                  
    @wire(getProducts) getResponse({data,error}){
        if(data){
            this.data=data;
        }
        else if(error){
            this.error=undefined;
        }
    }
};