const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ all: true, nested: true }]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display a category by selected db index
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{ all: true, nested: true }]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new category
router.post('/', (req, res) => {
  // expects => {    category_name: "new category"  }
  Category.create(req.body)
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // expects => {    category_name: "updated category data"  }
  Category.update(req.body, {
    where: { id: req.params.id }
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
