import { MenuItem } from './menuItem';

export class Menu {
    public items: MenuItem[] = [];
    constructor(menuItems: MenuItem[]) {
        this.items = menuItems;
    }
}
