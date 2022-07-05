const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

try {
  const buildPath = path.resolve(__dirname, 'build')
  fs.removeSync(buildPath)

  const contractPath = path.resolve(__dirname, 'contracts', 'CoinflipDuel.sol')
  const source = fs.readFileSync(contractPath, 'utf8')

  const input = {
    language: 'Solidity',
    sources: {
      'CoinflipDuel.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  }
  const output = JSON.parse(solc.compile(JSON.stringify(input)))
  fs.ensureDirSync(buildPath)

  for (let contract in output.contracts['CoinflipDuel.sol']) {
    console.log(output.contracts['CoinflipDuel.sol'][contract].abi)
    fs.outputJSONSync(
      path.resolve(buildPath, contract + '.json'),
      output.contracts['CoinflipDuel.sol'][contract]
    )
  }

  console.log('Compiled succesfully')
} catch (err) {
  console.log('Error while compiling', err)
}
