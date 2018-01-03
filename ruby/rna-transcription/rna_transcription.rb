# RNA Transcription
class Complement
  def self.of_dna(strand)
    rna = strand.split('').map { |dna| convert(dna) }
    rna.include?(nil) ? '' : rna.join('')
  end

  def self.convert(dna)
    case dna
    when 'G'
      'C'
    when 'C'
      'G'
    when 'T'
      'A'
    when 'A'
      'U'
    end
  end
end

module BookKeeping
  VERSION = 4
end
