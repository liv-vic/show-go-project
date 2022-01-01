/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShows = /* GraphQL */ `
  subscription OnCreateShows(
    $Address: String
    $LocationName: String
    $ShowDate: AWSDate
    $ShowName: String
    $Timestamp: AWSDateTime
  ) {
    onCreateShows(
      Address: $Address
      LocationName: $LocationName
      ShowDate: $ShowDate
      ShowName: $ShowName
      Timestamp: $Timestamp
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
export const onDeleteShows = /* GraphQL */ `
  subscription OnDeleteShows(
    $Address: String
    $LocationName: String
    $ShowDate: AWSDate
    $ShowName: String
    $Timestamp: AWSDateTime
  ) {
    onDeleteShows(
      Address: $Address
      LocationName: $LocationName
      ShowDate: $ShowDate
      ShowName: $ShowName
      Timestamp: $Timestamp
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
export const onUpdateShows = /* GraphQL */ `
  subscription OnUpdateShows(
    $Address: String
    $LocationName: String
    $ShowDate: AWSDate
    $ShowName: String
    $Timestamp: AWSDateTime
  ) {
    onUpdateShows(
      Address: $Address
      LocationName: $LocationName
      ShowDate: $ShowDate
      ShowName: $ShowName
      Timestamp: $Timestamp
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
