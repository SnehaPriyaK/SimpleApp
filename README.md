# SimpleApp

CREATE TABLE registeredusers (firstName VARCHAR(252), lastName VARCHAR(252), mobileNo INTEGER, emailID VARCHAR(252), password CHAR(60));
use userdata;
ALTER TABLE registeredusers DROP COLUMN mobileNo;
ALTER TABLE registeredusers ADD COLUMN mobileNo VARCHAR(252);
SELECT * from registeredusers;
