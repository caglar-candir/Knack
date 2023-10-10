import {Page} from "@playwright/test";

export class filteringInventoryPage {

    recordsSection = 'a[data-cy="nav-records"]';
    warehouseInventory = 'a[data-cy="Object Warehouse Inventory"]';
    addFiltersButton = 'a[data-cy="add-filters"]';
    needsReOrder : 'select[data-cy="field-list-field"]';
    submit : 'button[data-cy="save-filters"]';
    countAndStoreNumbers : 'table[class="knTable is-fullwidth knTable--striped"]';

    readonly page : Page

    constructor(page){
    this.page = page;
    this.recordsSection;
    this.warehouseInventory;
    this.addFiltersButton;
    this.needsReOrder;
    this.submit;
    this.countAndStoreNumbers;
    }

}