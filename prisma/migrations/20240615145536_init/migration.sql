-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(255) NULL,
    `roleId` INTEGER NOT NULL DEFAULT 1,
    `profile` VARCHAR(50) NULL DEFAULT 'profile.webp',
    `prefix` VARCHAR(6) NULL DEFAULT 'นาย',
    `firstname` VARCHAR(50) NULL,
    `lastname` VARCHAR(50) NULL,
    `birthday` VARCHAR(10) NULL DEFAULT '2000-01-01',
    `phone` VARCHAR(10) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(12) NOT NULL DEFAULT 'user',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favorite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dmtId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dmtId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dmtId` INTEGER NOT NULL,
    `content` VARCHAR(255) NULL,
    `score` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dmtId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat_msg` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatId` INTEGER NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `state_chat` BOOLEAN NOT NULL,
    `read_user` BOOLEAN NULL DEFAULT false,
    `read_dmt` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dormitory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `userId` INTEGER NOT NULL,
    `img` VARCHAR(50) NULL,
    `location` VARCHAR(50) NULL,
    `price` INTEGER NOT NULL,
    `doc` VARCHAR(100) NULL,
    `state` BOOLEAN NULL DEFAULT false,
    `zone` VARCHAR(20) NULL,
    `facebook` VARCHAR(70) NULL,
    `line` VARCHAR(40) NULL,
    `phone` VARCHAR(10) NULL,
    `occupied` BOOLEAN NULL DEFAULT false,
    `view` INTEGER NULL DEFAULT 0,
    `reviewScore` DECIMAL(65, 30) NULL DEFAULT 0.0,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dormitory_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dmtId` INTEGER NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `price` INTEGER NULL DEFAULT 0,
    `quantity` INTEGER NULL DEFAULT 0,
    `occupied` INTEGER NULL DEFAULT 0,
    `width` INTEGER NULL,
    `length` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dormitory_img` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dmt_typeId` INTEGER NOT NULL,
    `url` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dormitory_state` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dmtId` INTEGER NOT NULL,
    `park_car` BOOLEAN NULL DEFAULT false,
    `park_motorcycle` BOOLEAN NULL DEFAULT false,
    `lift` BOOLEAN NULL DEFAULT false,
    `security_door` BOOLEAN NULL DEFAULT false,
    `fingerprint` BOOLEAN NULL DEFAULT false,
    `keycard` BOOLEAN NULL DEFAULT false,
    `man` BOOLEAN NULL DEFAULT false,
    `female` BOOLEAN NULL DEFAULT false,
    `animal` BOOLEAN NULL DEFAULT false,
    `fitness` BOOLEAN NULL DEFAULT false,
    `wifi` BOOLEAN NULL DEFAULT false,
    `cctv` BOOLEAN NULL DEFAULT false,
    `security_guard` BOOLEAN NULL DEFAULT false,
    `smoke` BOOLEAN NULL DEFAULT false,
    `restaurant` BOOLEAN NULL DEFAULT false,
    `store` BOOLEAN NULL DEFAULT false,
    `washing` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Dormitory_state_dmtId_key`(`dmtId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dormitory_facilitate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dmt_typeId` INTEGER NOT NULL,
    `fan` BOOLEAN NULL DEFAULT false,
    `air` BOOLEAN NULL DEFAULT false,
    `closet` BOOLEAN NULL DEFAULT false,
    `water_heater` BOOLEAN NULL DEFAULT false,
    `table` BOOLEAN NULL DEFAULT false,
    `dressing_table` BOOLEAN NULL DEFAULT false,
    `fridge` BOOLEAN NULL DEFAULT false,
    `bed` BOOLEAN NULL DEFAULT false,
    `tv` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Dormitory_facilitate_dmt_typeId_key`(`dmt_typeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserve` ADD CONSTRAINT `Reserve_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserve` ADD CONSTRAINT `Reserve_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat_msg` ADD CONSTRAINT `Chat_msg_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dormitory` ADD CONSTRAINT `Dormitory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dormitory_type` ADD CONSTRAINT `Dormitory_type_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dormitory_img` ADD CONSTRAINT `Dormitory_img_dmt_typeId_fkey` FOREIGN KEY (`dmt_typeId`) REFERENCES `Dormitory_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dormitory_state` ADD CONSTRAINT `Dormitory_state_dmtId_fkey` FOREIGN KEY (`dmtId`) REFERENCES `Dormitory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dormitory_facilitate` ADD CONSTRAINT `Dormitory_facilitate_dmt_typeId_fkey` FOREIGN KEY (`dmt_typeId`) REFERENCES `Dormitory_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
