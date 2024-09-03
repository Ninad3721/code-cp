FROM openjdk:11-jdk

#setting the working directory 
WORKDIR /app

#copying the code contents of java file into working dir 
COPY run_code.sh .
RUN chmod +x run_code.sh
ENTRYPOINT ["./run_code.sh"]
CMD [""]