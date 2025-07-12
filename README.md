# 🌟 Arch Survival Guide 🌟

Welcome to the **Arch Survival Guide**! This repository serves as a comprehensive manual for installing, configuring, and maintaining Arch Linux. Whether you're a beginner or an experienced user, you'll find valuable resources here, including online documentation and video tutorials.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-v1.0.0-brightgreen)](https://github.com/alviore/arch-survival-guide/releases)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [Daily Maintenance](#daily-maintenance)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Arch Linux is known for its simplicity and flexibility. This guide aims to help you navigate the installation process and daily use of Arch Linux. With clear instructions and examples, you can easily set up your system and keep it running smoothly.

## Features

- **Beginner-Friendly**: Step-by-step instructions for new users.
- **Comprehensive Documentation**: Covers installation, configuration, and maintenance.
- **Video Tutorials**: Visual guides to help you through complex tasks.
- **Community Support**: Engage with other users and get help when needed.
- **Open Source**: Contribute to the project and improve the guide.

## Installation Guide

### Prerequisites

Before you begin, ensure you have:

- A compatible computer or virtual machine.
- An internet connection.
- A USB drive for installation.

### Step-by-Step Installation

1. **Download the Arch Linux ISO**: Visit the [official Arch Linux website](https://archlinux.org/download/) to download the latest ISO file.
   
2. **Create a Bootable USB**: Use tools like `Rufus` (Windows) or `dd` (Linux) to create a bootable USB drive.

3. **Boot from USB**: Restart your computer and boot from the USB drive.

4. **Set Up Your Network**: Use `iwctl` for wireless connections or `dhcpcd` for wired connections.

5. **Partition Your Disk**: Use `fdisk` or `cfdisk` to partition your disk. Create at least two partitions: one for the root and one for swap.

6. **Format the Partitions**: Format the root partition with `mkfs.ext4` and the swap partition with `mkswap`.

7. **Mount the Partitions**: Mount your root partition to `/mnt` using `mount /dev/sda1 /mnt`.

8. **Install Base Packages**: Run `pacstrap /mnt base linux linux-firmware` to install the base system.

9. **Generate fstab**: Use `genfstab -U /mnt >> /mnt/etc/fstab` to generate the fstab file.

10. **Chroot into the New System**: Use `arch-chroot /mnt` to enter your new system.

11. **Set Time Zone**: Configure your time zone using `ln -sf /usr/share/zoneinfo/Region/City /etc/localtime` and run `hwclock --systohc`.

12. **Localization**: Edit `/etc/locale.gen` and uncomment your locale. Then run `locale-gen`.

13. **Set Hostname**: Create a hostname file using `echo "myhostname" > /etc/hostname`.

14. **Install Bootloader**: Install `GRUB` using `pacman -S grub` and configure it.

15. **Reboot**: Exit chroot and reboot your system.

For a detailed walkthrough, refer to the [official Arch Wiki](https://wiki.archlinux.org/title/Installation_guide).

## Configuration

Once your system is installed, you can configure it to suit your needs.

### Systemd Services

Use `systemctl` to manage services. For example, to enable a service:

```bash
sudo systemctl enable service_name
```

### User Management

Create a new user with:

```bash
sudo useradd -m -G wheel username
```

Set a password with:

```bash
sudo passwd username
```

### Package Management

Arch uses `pacman` for package management. Here are some basic commands:

- **Install a package**: `sudo pacman -S package_name`
- **Remove a package**: `sudo pacman -R package_name`
- **Update the system**: `sudo pacman -Syu`

### AUR (Arch User Repository)

To install packages from the AUR, you can use an AUR helper like `yay`:

```bash
yay -S package_name
```

## Daily Maintenance

Keeping your system updated is crucial for security and performance.

### Regular Updates

Run the following command regularly to keep your system updated:

```bash
sudo pacman -Syu
```

### Cleaning Up

Remove unnecessary packages with:

```bash
sudo pacman -Rns $(pacman -Qdtq)
```

## Resources

- **Online Documentation**: Visit our [documentation](https://github.com/alviore/arch-survival-guide/releases) for detailed guides.
- **Video Tutorials**: Check our YouTube channel for video tutorials on various topics.
- **Community Forums**: Join the Arch Linux forums to connect with other users.

## Contributing

We welcome contributions! If you want to improve this guide, feel free to fork the repository and submit a pull request. 

### How to Contribute

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for using the Arch Survival Guide! For any questions or issues, please check the [Releases](https://github.com/alviore/arch-survival-guide/releases) section or open an issue in the repository. Happy Arching!