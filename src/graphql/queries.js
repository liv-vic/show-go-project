/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShows = /* GraphQL */ `
  query GetShows($Timestamp: AWSDateTime!, $Whatisthenameofyourshow: ID!) {
    getShows(
      Timestamp: $Timestamp
      Whatisthenameofyourshow: $Whatisthenameofyourshow
    ) {
      Timestamp
      ShowName
      LocationName
      Address
      ShowDate
      ShowTime
      Genre
      Description
      Poster
      Email
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
        Timestamp
        ShowName
        LocationName
        Address
        ShowDate
        ShowTime
        Genre
        Description
        Poster
        Email
      }
      nextToken
    }
  }
`;
