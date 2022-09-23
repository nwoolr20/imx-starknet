import { expect } from "chai";
import { starknet } from "hardhat";
import {
  StarknetContract,
  StarknetContractFactory,
} from "hardhat/types/runtime";
import { toUint256WithFelts } from "./starknetUtils";

export async function deployERC721(
  owner: BigInt,
  erc721Type: string
): Promise<StarknetContract> {
  const name = starknet.shortStringToBigInt("Rez's Raging Rhinos");
  const symbol = starknet.shortStringToBigInt("REZ");
  const default_royalty_receiver = owner;
  const default_royalty_fee_basis_points = BigInt(2000);

  // Deploy the contract

  const contractFactory: StarknetContractFactory =
    await starknet.getContractFactory(erc721Type);
  const contract = await contractFactory.deploy({
    name,
    symbol,
    owner,
    default_royalty_receiver,
    default_royalty_fee_basis_points,
  });

  console.log(`Deployed erc721 contract to ${contract.address}`);
  return contract;
}

export async function deployERC20(
  owner: BigInt,
  erc20Type: string
): Promise<StarknetContract> {
  const name = starknet.shortStringToBigInt("CalCoin");
  const symbol = starknet.shortStringToBigInt("CAL");
  const cap = toUint256WithFelts("1000000");
  const decimals = BigInt(18);

  // Deploy the contract
  const contractFactory: StarknetContractFactory =
    await starknet.getContractFactory(erc20Type);
  const contract = await contractFactory.deploy({
    name,
    symbol,
    decimals,
    owner,
    cap,
  });

  console.log(`Deployed erc20 contract to ${contract.address} with args:`);
  return contract;
}

export async function deployTestSafeMath(): Promise<StarknetContract> {
  const contractFactory: StarknetContractFactory =
    await starknet.getContractFactory("SafeMath_mock");
  const contract = await contractFactory.deploy();
  return contract;
}

export async function deployStandardERC721Bridge(
  owner: BigInt
): Promise<StarknetContract> {
  const contractFactory: StarknetContractFactory =
    await starknet.getContractFactory("StandardERC721Bridge");
  const contract = await contractFactory.deploy({ owner });
  return contract;
}

export async function deployTestAccessControl(
  default_admin: BigInt
): Promise<StarknetContract> {
  const contractFactory: StarknetContractFactory =
    await starknet.getContractFactory("AccessControl_mock");
  const contract = await contractFactory.deploy({ default_admin });
  return contract;
}
