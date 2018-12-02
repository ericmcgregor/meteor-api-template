import { Meteor } from 'meteor/meteor';

JsonRoutes.add("get", "/api", async function (request, res, next) {
  JsonRoutes.sendResult(res, {
    data: "success"
  });
});