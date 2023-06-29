
FROM ubuntu:18.04
# FROM ubuntu:20.04


RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt update && apt upgrade -y 
RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt install -y curl wget 

# RUN \
#     --mount=type=cache,target=/var/cache/apt \
#     apt install -y libvulkan-dev 

# RUN \
#     --mount=type=cache,target=/var/cache/apt \
#   apt install -y libgomp1


# RUN \
#     --mount=type=cache,target=/var/cache/apt \
#   apt install -y libglibmm-2.4-1v5 libglibmm-2.4-dev

  
WORKDIR /bin
#/resources/linux/bin
# COPY ./resources/linux/bin .

#WORKDIR /install 
#COPY downloads-gia-upscayl/upscayl-2.5.5-linux.deb .

#RUN \
#    --mount=type=cache,target=/var/cache/apt \
#  apt install -y ./upscayl-2.5.5-linux.deb


WORKDIR /bin 
COPY giaupscayl.sh .
#COPY .ssh . #@STCGoal Placeholder to access SSH on the Web Server CDN 
