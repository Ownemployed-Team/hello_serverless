require("dotenv").config();
const { getAdvertiserNames } = require("../services/advertisers");

describe("get user from database", () => {
  it("should fetch advertiser names", async () => {
    const response = await getAdvertiserNames({
      name: "N",
      page: 1,
      pageSize: 10,
    });
    expect(response.length).toEqual(10);
  });
});
