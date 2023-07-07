
FROM ubuntu:18.04
# FROM ubuntu:20.04


RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt update && apt upgrade -y 

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

WORKDIR /install 
COPY downloads-gia-upscayl/upscayl-2.5.5-linux.deb .

RUN \
    --mount=type=cache,target=/var/cache/apt \
  apt install -y ./upscayl-2.5.5-linux.deb

RUN rm upscayl-2.5.5-linux.deb

WORKDIR /work

RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt install -y \
        libgbm-dev libasound2-dev libvulkan-dev libgomp1 \
        libglib2.0-dev

RUN \
    --mount=type=cache,target=/var/cache/apt \
    apt install -y \
	glibc-source
