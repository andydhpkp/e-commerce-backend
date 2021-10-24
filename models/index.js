// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //NOT CONFIDENT IN THIS
  //as: 'tag_id',
  foreignKey: 'product_id',
  //onDelete: 'SET NULL'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //NOT CONFIDENT IN THIS BUT DID THE OPPOSITE
  //as: 'product_id',
  foreignKey: 'tag_id',
  //onDelete: 'SET NULL'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
