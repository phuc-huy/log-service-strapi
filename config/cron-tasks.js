module.exports = {
  postCountEmail: {
    task: async ({ strapi }) => {
      console.log(`--------- Bắt đầu chạy đếm Tracking ---------`);

      const count = await strapi.db.query("api::response.response").count({
        orderBy: { createdAt: 'DESC' },
        where: {
          path: "/api/v1/users/me",
          method: "GET",
          status_code: 200,
        },
        district:"user_id",
      });

      console.log(count);

      console.log(`=========== Kết thúc chạy đếm Tracking ==========`);
    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
