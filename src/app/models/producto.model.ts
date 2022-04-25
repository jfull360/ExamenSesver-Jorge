
export class Producto {

  constructor(
    private id_?: number,
    private brand_?: string,
    private image_link_?: string,
    private name_?: string,
    private price_?: string,
    private rating_?: number,
    private category_?: string,
    private description_?: string,
    private product_type_?: string,
    private product_colors_?: [],
    
  ){
    
  }

  public get id(): number {
    return this.id_!;
  }
  public set id(value: number) {
    this.id_ = value;
  }
  public get brand(): string {
    return this.brand_!;
  }
  public set brand(value: string) {
    this.brand_ = value;
  }
  public get image_link(): string {
    return this.image_link_!;
  }
  public set image_link(value: string) {
    this.image_link_ = value;
  }
  public get name(): string {
    return this.name_!;
  }
  public set name(value: string) {
    this.name_ = value;
  }
  public get price(): string {
    return this.price_!;
  }
  public set price(value: string) {
    this.price_ = value;
  }
  public get rating(): number{
    return this.rating_!;
  }
  public set rating(value: number) {
    this.rating_ = value;
  }
  public get description(): string {
    return this.description_!;
  }
  public set description(value: string) {
    this.description_ = value;
  }
  public get product_type(): string {
    return this.product_type_!;
  }
  public set product_type(value: string) {
    this.product_type_ = value;
  }
  public get category(): string {
    return this.category_!;
  }
  public set category(value: string) {
    this.category_ = value;
  }
  public get product_colors(): [] {
    return this.product_colors_!;
  }
  public set product_colors(value: []) {
    this.product_colors_ = value;
  }

  
}
