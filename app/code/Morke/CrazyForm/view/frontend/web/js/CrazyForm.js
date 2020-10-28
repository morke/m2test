define(['jquery', 'uiComponent', 'ko' ], function ($, Component, ko) {
        'use strict';
        return Component.extend({

            initialize: function () {
                this._super();
                //this.getCountry();
                console.log(this);
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
