FROM mysql:5.7

COPY setup.sql /docker-entrypoint-initdb.d/

CMD [ "--innodb-use-native-aio=0", "--default-authentication-plugin=mysql_native_password" ]
