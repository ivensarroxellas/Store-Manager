const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT
      saleP.sale_id as saleId,
      saleP.product_id as productId,
      saleP.quantity,
      sale.date as date
    FROM
      StoreManager.sales_products AS saleP
    INNER JOIN
      StoreManager.sales AS sale
    ON saleP.sale_id = sale.id`,
  );

  return sales;
};

const findSalesById = async (saleId) => {
  const [sale] = await connection.execute(
    `SELECT
      saleP.product_id as productId,
      saleP.quantity,
      sale.date as date
    FROM
      StoreManager.sales_products AS saleP
    INNER JOIN
      StoreManager.sales AS sale
    ON saleP.sale_id = sale.id
    WHERE sale_id = (?)`,
    [saleId],
  );

  return sale;
};

const createSaleProduct = async (productInfo, saleId) => {
  const { productId, quantity } = productInfo;
  connection.execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, productId, quantity]);
  return true;
};

const createNewSale = async (saleArr) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  await Promise.all(saleArr.map((productInfo) => createSaleProduct(productInfo, insertId)));
  return { id: insertId };
};

const createSaleProduct = async (productInfo, saleId) => {
  connection.execute('INSERT INTO sales_products (sale_id, product_id, quantity, date) VALUES(?, ?, ?, NOW())',
    [saleId, productId, quantity]);
  return true;
};

const createNewSale = async (saleArr) => {
  const { productId, quantity } = productInfo;
  await Promise.all(saleArr.map((productInfo) => createSaleProduct(productInfo, insertId)));
  return { id: insertId };
};

const updateSale = async (saleId, saleInfo) => {
  const { productId, quantity } = saleInfo;
  await connection.execute(
    'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?',
    [quantity, saleId, productId],
);
  return { productId, quantity };
};

const deleteSale = async (SaleId) => {
  await connection.execute('DELETE FROM sales WHERE id = ?',
    [SaleId]);
  
  return true;
};

module.exports = {
  findAllSales,
  findSalesById,
  createNewSale,
  createSaleProduct,
  updateSale,
  deleteSale,
};