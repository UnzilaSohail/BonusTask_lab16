# Use the official Apache HTTPD image from Docker Hub
FROM httpd:latest

# Enable the mpm_event_module (if required for your configuration)
RUN sed -i 's/^#LoadModule mpm_event_module/LoadModule mpm_event_module/' /usr/local/apache2/conf/httpd.conf

# Copy custom configuration file if needed
# Uncomment and modify this line if you have a custom httpd.conf
#COPY ./my-custom-httpd.conf /usr/local/apache2/conf/httpd.conf

# Expose port 80 to access the Apache service
EXPOSE 80

# Start Apache in the foreground when the container runs
CMD ["httpd-foreground"]
