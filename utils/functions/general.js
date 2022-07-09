export const sortOpenTables = (contracts, sort, reverse) => {
  if (sort === '#') {
    let arrayForSort = [...contracts]
    return arrayForSort.reverse()
  }
  const compareHelper = (a, b) => {
    if (a > b) {
      return reverse ? 1 : -1
    }

    if (a < b) {
      return reverse ? -1 : 1
    }
    return 0
  }
  function compare(a, b) {
    if (sort === 'Table') {
      return compareHelper(a.history[1], b.history[1])
    }

    if (sort === 'Staked') {
      return compareHelper(a.history[5], b.history[5])
    }

    if (sort === 'Min stake') {
      return compareHelper(a.history[2], b.history[2])
    }

    if (sort === 'Block Timestamp') {
      return compareHelper(Number(a[3]), Number(b[3]))
    }

    if (sort === 'Winner') {
      return compareHelper(a[0], b[0])
    }

    if (sort === 'Loser') {
      return compareHelper(a[1], b[1])
    }

    if (sort === 'Wager') {
      return compareHelper(a[2], b[2])
    }

    if (sort === 'Address') {
      return compareHelper(
        a.contract.options.address,
        b.contract.options.address
      )
    }
  }

  let arrayForSort = [...contracts]

  return arrayForSort.sort(compare)
}

export const copyToClipBoard = (text) => {
  navigator.clipboard.writeText(text)
}
