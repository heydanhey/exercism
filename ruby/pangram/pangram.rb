# Pangram
class Pangram
  ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.freeze
  def self.pangram?(phrase)
    phrase
      .downcase
      .gsub(/[^a-z]/, '')
      .chars
      .sort
      .uniq
      .join('') == ALPHABET
  end
end

module BookKeeping
  VERSION = 6
end
