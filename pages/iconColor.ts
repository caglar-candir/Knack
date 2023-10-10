import {Page} from "@playwright/test";

export class iconColorPage {

    warehouseManager = 'a[data-testid="apps-table-app-name-field"]';
    pagesSection = 'a[data-cy="nav-pages"]';
    adminInventory = 'div [data-cy="Admin > Inventory"]';
    inventory : 'div [data-cy="Inventory"]';
    viewWarehouseInventoryDetails : 'div [data-cy="View Warehouse Inventory Details"]';

    
    readonly page : Page

    constructor(page){
    this.page = page;
    this.warehouseManager;
    this.pagesSection;
    this.adminInventory;
    this.inventory;

    }


}