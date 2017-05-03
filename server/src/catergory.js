'use strict';
const Model = require('../models/index');

const getAllCategoriesRaw = () => {

  Model.sequelize.query('Select * from Categories');
};

const getAllCategoriesReplacementsUsingArray = () => {

  Model.sequelize.query('Select * from Categories where id > ? and id < ?', {replacements:[1,4], type: Model.sequelize.QueryTypes.SELECT});
}

const getAllCategoriesReplacementsUsingObject = () => {

  Model.sequelize.query('Select * from Categories where id > :floorLimit and id < :ceilLimit',
    {replacements:{floorLimit: 1, ceilLimit:4}, type: Model.sequelize.QueryTypes.SELECT});
}