# Sieve
class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    numbers = *(2..@limit)
    arr = []
    until numbers.empty?
      prime = numbers.shift
      arr << prime
      numbers = numbers.reject { |n| (n % prime).zero? }
    end
    arr
  end
end

module BookKeeping
  VERSION = 1
end
