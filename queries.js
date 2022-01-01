/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShows = /* GraphQL */ `
  query GetShows($Timestamp: AWSDateTime!, $Whatisthenameofyourshow: ID!) {
    getShows(
      Timestamp: $Timestamp
      Whatisthenameofyourshow: $Whatisthenameofyourshow
    ) {
      Address
      Description
      Email
      Genre
      LocationName
      Poster
      ShowDate
      ShowName
      ShowTime
      Timestamp
    }
  }
`;
export const listShows = /* GraphQL */ `
  query ListShows(
    $filter: TableShowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Address
        Description
        Email
        Genre
        LocationName
        Poster
        ShowDate
        ShowName
        ShowTime
        Timestamp
      }
      nextToken
    }
  }
`;
