# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.1.0] - 2022-05-26

Initial release!

## [0.1.1] - 2022-05-27

### Added

- Changelog

### Changed

- Minor ts config change
- Changed folder structure for test utils

### Fixed

- Minor README/documentation fixes
- Added `cairolib` as an install dependency

## [0.2.0] - 2022-06-16

### Added

- NFT bridging protocol (Arch)

### Changed

- Upgrade to support StarkNet 0.9.0

### Fixed

- Minor README/documentation changes

# [0.2.1] - 2022-07-11

### Added

- Protostar tests
- Added `name()` and `symbol()` to `IERC721` for testing

### Changed

- Upgrade to support OpenZeppelin 0.2.1
- Removed AccessControl implementation, changed to using OpenZeppelin implementation instead
- `IERC2981_Unidirectional_Royalties` is now `IERC721_Unidirectional`

### Fixed

- `PaymentSplitter` now starts index from 0 instead of 1
- `ERC721_Token_Metadata` now returns empty felt array when both base and token uri are undefined

# [0.3.0] - 2022-09-23

### Changed

- Upgrade to support Cairo 0.10.0
- OpenZeppelin dependency changed to working fork of OpenZeppelin which [will be reverted once OpenZeppelin makes fixes](https://github.com/OpenZeppelin/cairo-contracts/issues/465).
- Hardhat tests using Argent Account have been removed as [Shardlabs has not updated the Account version being used](https://github.com/Shard-Labs/starknet-hardhat-plugin/blob/13ced482a603a31dbb1376541e277a87b2d8272c/src/account.ts#L485)
- Dependency on [cairo_lib](https://github.com/aspectco/cairo-lib) removed and functionality integrated into repository.
