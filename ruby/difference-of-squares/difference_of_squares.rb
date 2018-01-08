# Difference of Squares
class Squares
  def initialize(input)
    @input = input
  end

  def square_of_sum
    (1..@input).reduce(:+)**2
  end

  def difference
    square_of_sum - sum_of_squares
  end

  def sum_of_squares
    (1..@input).reduce { |sum, n| sum + (n**2) }
  end
end

module BookKeeping
  VERSION = 4
end
