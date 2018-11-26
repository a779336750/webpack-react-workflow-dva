import test from './test.js';
const models = [test];
export const registerModels = app => {
  models.forEach(model => {
    app.model(model);
  });
};
