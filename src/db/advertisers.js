const { dbQuery } = require("./init");

const getNames = async ({ name, page, pageSize }) => {
  const offset = pageSize * (page - 1);
  const securedOffset = offset > 10 ? 10 : offset; // Do not let people see all our companies

  const res = await dbQuery(
    `
  SELECT
    c.id,
    c.name
  FROM
    dev.public.companies c
  WHERE
    ( $1 IS NULL OR c.name ilike '%' || $2 || '%')
  LIMIT $3
  OFFSET $4;
  `,
    [name, name, pageSize, securedOffset]
  );
  return res.rows;
};

module.exports = {
  getNames,
};
