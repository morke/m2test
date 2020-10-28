define(['jquery', 'uiRegistry', 'uiComponent', 'ko', 'Magento_Ui/js/form/element/select'], function ($, registry, Component, ko, select) {
        'use strict';

        return select.extend({
            // optionsValue: ko.observableArray(['France', 'Germany', 'Spain'])

            defaults: {
                skipValidation: false,
                imports: {
                    optionsValue: (['France', 'Germany', 'Spain']),
                    update: '${ $.parentName }.country_id:value'
                }
            },
            /*update: function (value) {
                var isRegionRequired,
                    option;

                if (!value) {
                    return;
                }

                option = _.isObject(this.countryOptions) && this.countryOptions[value];

                if (!option) {
                    return;
                }

                defaultPostCodeResolver.setUseDefaultPostCode(!option['is_zipcode_optional']);

                if (option['is_region_visible'] === false) {
                    // Hide select and corresponding text input field if region must not be shown for selected country.
                    this.setVisible(false);

                    if (this.customEntry) { // eslint-disable-line max-depth
                        this.toggleInput(false);
                    }
                }

                isRegionRequired = !this.skipValidation && !!option['is_region_required'];

                if (!isRegionRequired) {
                    this.error(false);
                }

                this.required(isRegionRequired);
                this.validation['required-entry'] = isRegionRequired;

                registry.get(this.customName, function (input) {
                    input.required(isRegionRequired);
                    input.validation['required-entry'] = isRegionRequired;
                    input.validation['validate-not-number-first'] = !this.options().length;
                }.bind(this));
            }*/
/*
            initialize: function () {

                this._super();
                //this.getCountry();
                console.log("select extended blyattt11");
                console.log(this);
                //this.optionsValue:'custom option';

                this.optionsValue = "custom option";
            },


*/


/*
            getCountry : function () {
                $.get('//restcountries.eu/rest/v2/all', function(data) {
                    $.each(data, function(index, val) {
                        console.log(val.name)
                    });
                })
            },
*/




        });
    }
);
