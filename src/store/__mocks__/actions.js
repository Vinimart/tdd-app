import userFixture from "../../../tests/unit/fixtures/userFixture";

export default {
  // eslint-disable-next-line no-undef
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture),
};
