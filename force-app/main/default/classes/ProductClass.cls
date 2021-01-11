public with sharing class ProductClass {
    public ProductClass() {
    }
    @AuraEnabled(cacheable=true)
    public static  List<Product__c> getProducts(){
      List<Product__c> pdt=[select Name,Prize__c,Discount__c,Quabtity_of_Products__c from Product__c];
      return pdt;
        system.debug(pdt);
        //my change
    }
}
