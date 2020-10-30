define(['jquery', 'uiRegistry', 'uiComponent', 'ko', 'Magento_Ui/js/form/element/select'], function ($, registry, Component, ko, select) {
        'use strict';

        return select.extend({


            initialize: function () {
                this._super();
                /* Uncomment next line for see Countries in console log*/
                // this.getCountry();
            },

            getCountry : function () {
                $.get('//restcountries.eu/rest/v2/all', function(data) {
                    $.each(data, function(index, val) {
                        console.log(val.name)
                    });
                })
            },

        });
    }
);
