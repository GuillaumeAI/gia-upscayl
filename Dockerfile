
FROM ubuntu:18.04


RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt update && apt upgrade -y && \
    apt install -y libvulkan-dev 
RUN \
    --mount=type=cache,target=/var/cache/apt \
  apt install -y libgomp1


RUN \
    --mount=type=cache,target=/var/cache/apt \
  apt install -y libglibmm-2.4-1v5 libglibmm-2.4-dev

  
WORKDIR /bin
#/resources/linux/bin
COPY ./resources/linux/bin .

