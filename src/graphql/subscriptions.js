/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShows = /* GraphQL */ `
  subscription OnCreateShows(
    $Timestamp: AWSDateTime
    $ShowName: String
    $LocationName: String
    $Address: String
    $ShowDate: AWSDate
  ) {
    onCreateShows(
      Timestamp: $Timestamp
      ShowName: $ShowName
      LocationName: $LocationName
      Address: $Address
      ShowDate: $ShowDate
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
export const onUpdateShows = /* GraphQL */ `
  subscription OnUpdateShows(
    $Timestamp: AWSDateTime
    $ShowName: String
    $LocationName: String
    $Address: String
    $ShowDate: AWSDate
  ) {
    onUpdateShows(
      Timestamp: $Timestamp
      ShowName: $ShowName
      LocationName: $LocationName
      Address: $Address
      ShowDate: $ShowDate
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
export const onDeleteShows = /* GraphQL */ `
  subscription OnDeleteShows(
    $Timestamp: AWSDateTime
    $ShowName: String
    $LocationName: String
    $Address: String
    $ShowDate: AWSDate
  ) {
    onDeleteShows(
      Timestamp: $Timestamp
      ShowName: $ShowName
      LocationName: $LocationName
      Address: $Address
      ShowDate: $ShowDate
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
