class Hamming
  def self.compute(a, b)
    raise ArgumentError, 'Arguments are not the same length' if a.length != b.length
    a.split('').select.with_index { |letter, i| letter != b[i] }.length
  end
end

  module BookKeeping
    VERSION = 3
  end
