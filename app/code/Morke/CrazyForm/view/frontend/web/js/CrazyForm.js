define([
    'jquery',
    'uiComponent',
    'ko',
    'Magento_Ui/js/form/element/abstract',
    'uiLayout',
    'uiRegistry',
    'Magento_Ui/js/form/form'],

    function ($, Component, ko, abstract, uiLayout, uiRegistry, form) {
        'use strict';
        return Component.extend({

            initialize: function () {
                this._super();
                //this.getCountry();
                //console.log(this);
                // return this;
            },


            getCountry : function () {
                $.get('//restcountries.eu/rest/v2/all', function(data) {
                    $.each(data, function(index, val) {
                        console.log(val.name)
                    });
                })
            },

            onSubmit: function () {
                alert("BLYAAAAT");
            },


        });
    }
);
