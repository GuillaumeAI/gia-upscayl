
FROM jgwill/ubuntu:20.04
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

#RUN \
#    --mount=type=cache,target=/var/cache/apt \
#    apt install -y \
#        libgbm-dev libasound2-dev libvulkan-dev libgomp1 \
#        libglib2.0-dev

#RUN \
#    --mount=type=cache,target=/var/cache/apt \
#    apt install -y \
#	glibc-source

WORKDIR /root
#RUN echo "PATH=\$PATH:/opt/Upscayl" >> ~/.bashrc && \
#         echo "export PATH" >> ~/.bashrc && \
#        echo "LD_LIBRARY_PATH=\$LD_LIBRARY_PATH:/opt/Upscayl/" >> ~/.bashrc && \
#        echo "export LD_LIBRARY_PATH" >> ~/.bashrc

#RUN \
#    --mount=type=cache,target=/var/cache/apt \
#        apt update && apt upgrade -y

# Patch to refactor>>
WORKDIR /opt/realsrgan
COPY downloads-gia-upscayl/realsrgan .

WORKDIR /root
RUN echo "PATH=\$PATH:/opt/realsrgan" >> ~/.bashrc && \
	echo "export PATH" >> ~/.bashrc && \
        echo "alias rgan=/opt/realsrgan/realesrgan-ncnn-vulkan " >> ~/.bashrc
#<<<
RUN \
    --mount=type=cache,target=/var/cache/apt \
  apt install -y libvulkan1 vulkan-tools vulkan-utils libvulkan-dev

RUN \
    --mount=type=cache,target=/var/cache/apt \
  apt install -y	mesa-vulkan-drivers
WORKDIR /work
