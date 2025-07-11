export interface MenuItems {
    label:string;
    icon:string;
    url:string;
    isCollapsed?:boolean;
    items?:MenuItems[];
}