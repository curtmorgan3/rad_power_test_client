# Rad Power Bikes Software Engineer Test

Curt Morgan

Client Repo: 
Client URL: 

Server Repo: 
Server URL: 

## Some Notes
I've made some assumptions about the shape of the data. If the prompt, using this chart as the source of truth.

| Example of New serial number | Bike model  | Model year code     | Month Codes |           | Year Manufactured (last 2 digits) in YY format (2017 would be 17 and 2018 would be 18) | Assembly Plant Code | Version of the bike (Revisions in 1, 2, 3) | serial number 6 numbers |
|-------------------|-------------|---------------------|-------------|-----------|----------------------------------------------------------------------------------------|---------------------|--------------------------------------------|-------------------------|
| RB719F1000001                | R           | B                   | 7           |           | 19                                                                                     | F                   | 1                                          | 000001                  |
| HB719F1000001                | H           | B                   | 7           |           | 19                                                                                     | F                   | 1                                          | 000001                  |
| SB919F1000001                | S           | B                   | 9           |           | 19                                                                                     | F                   | 1                                          | 000001                  |

---

My assumptions are that the serial number is always exactly 13 digits long, with the unique identifier always being six digits.