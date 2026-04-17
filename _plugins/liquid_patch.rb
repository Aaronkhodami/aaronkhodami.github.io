class Object
  def tainted?
    false
  end
  def trust
    self
  end
  def untaint
    self
  end
end

class String
  def tainted?
    false
  end
end

